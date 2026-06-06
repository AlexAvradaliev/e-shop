import {
  JsonLdScript,
  createOrganizationJsonLd,
} from "@/lib/seo/jsonLd.js";

export default function StorefrontSeo() {
  return (
    <JsonLdScript
      data={createOrganizationJsonLd()}
    />
  );
}
