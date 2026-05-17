import type { CollectionEntry } from "astro:content";
import { SITE } from "@/config";

const noteFilter = ({ data }: CollectionEntry<"notes">) => {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;

  return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
};

const getSortedNotes = (notes: CollectionEntry<"notes">[]) => {
  return notes
    .filter(noteFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedNotes;
