/**
 * Renders schema.org JSON-LD into the document.
 *
 * Server component on purpose — the payload must exist in the initial HTML for
 * crawlers that do not execute JavaScript.
 */
export function JsonLd({ schema }: { schema: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Schemas are built from our own content, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
