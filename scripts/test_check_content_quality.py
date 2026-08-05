import unittest

from check_content_quality import validate_mdx_text


def mdx(
    body: str,
    cover_image: str = "https://images.pexels.com/photos/1/example.jpeg",
    attribution: str = "*Photo by [Example](https://www.pexels.com/@example) on [Pexels](https://www.pexels.com)*",
) -> str:
    return f'''---
coverImage: "{cover_image}"
coverImageAttribution: "{attribution}"
---

{body}
'''


class ContentQualityImagePolicyTests(unittest.TestCase):
    def test_owned_r2_infographic_does_not_need_a_third_party_credit(self):
        issues = validate_mdx_text(
            mdx(
                "![Infographic](https://pub-decbec0c512249f48e448a8a38955480.r2.dev/pinterest/owned.png)",
            )
        )
        self.assertEqual(issues, [])

    def test_owned_r2_cover_does_not_need_a_third_party_credit(self):
        issues = validate_mdx_text(
            mdx(
                "",
                cover_image="https://pub-decbec0c512249f48e448a8a38955480.r2.dev/pinterest/cover.png",
                attribution="",
            )
        )
        self.assertEqual(issues, [])

    def test_unowned_r2_image_still_requires_a_caption(self):
        issues = validate_mdx_text(mdx("![Chart](https://another-bucket.r2.dev/pinterest/chart.png)"))
        self.assertIn("missing Markdown caption/attribution for third-party image at line 6", issues)

    def test_third_party_image_requires_an_immediate_attribution_caption(self):
        issues = validate_mdx_text(mdx("![Chart](https://images.pexels.com/photos/2/chart.jpeg)"))
        self.assertIn("missing Markdown caption/attribution for third-party image at line 6", issues)

    def test_third_party_image_with_a_caption_passes(self):
        issues = validate_mdx_text(
            mdx(
                "![Chart](https://images.pexels.com/photos/2/chart.jpeg)\n*Market data overview. Photo by [Example](https://www.pexels.com/@example) on [Pexels](https://www.pexels.com)*",
            )
        )
        self.assertEqual(issues, [])

    def test_third_party_cover_requires_an_attribution(self):
        issues = validate_mdx_text(mdx("", attribution=""))
        self.assertIn("missing coverImageAttribution for third-party cover", issues)

    def test_attribution_only_body_caption_is_rejected(self):
        issues = validate_mdx_text(
            mdx("![Chart](https://images.pexels.com/photos/2/chart.jpeg)\n*Photo by [Example](https://www.pexels.com/@example) on [Pexels](https://www.pexels.com)*")
        )
        self.assertIn("missing Markdown caption/attribution for third-party image at line 6", issues)

    def test_wikimedia_attribution_only_body_caption_is_rejected(self):
        issues = validate_mdx_text(
            mdx("![Chart](https://upload.wikimedia.org/wikipedia/commons/a.jpg)\n*[Author](https://commons.wikimedia.org/wiki/User:Author), via [Wikimedia Commons](https://commons.wikimedia.org)*")
        )
        self.assertIn("missing Markdown caption/attribution for third-party image at line 6", issues)


if __name__ == "__main__":
    unittest.main()
