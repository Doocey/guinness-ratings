import S from "@sanity/desk-tool/structure-builder";
// Import a couple of icons to style up the admin panels
import { FcSettings } from 'react-icons/fc'

const hiddenDocTypes = (listItem) => !["siteSettings"].includes(listItem.getId());

export default () =>
  S.list() // Outermost / farthest left:  we want to create a vertical "list" pane.
    .title("Content") // Give the pane the title of 'Content' just like it has normally.
    .items([ // Define the items that will appear in this far-left pane.
      ...S.documentTypeListItems().filter(hiddenDocTypes), // Include all document types
      S.divider(),
      // Site Settings Singleton
      S.listItem() // Inside the 'items' array we create our first list item by hand.
        .title("Site Settings") // We give the first list item a title of 'About Me'. This is going to be where we define our singleton!
        .child(
          // This creates a new child pane when the list item is clicked on. Inside the parentheses we will define what that child pane will contain.
          S.editor() // This shows the content editor in the child pane. We specify what this editor displays with the three methods below...
            .id("siteSettings") // Set this to the name of the singleton.
            .schemaType("siteSettings") // Here we define which schema this editor will use to generate fields. We want this to use the 'about' schema so it has been filled in accordingly.
            .documentId("site-settings") // This will create a single document with the _id of 'singleton-about' and open it in the editor.
        )
        .icon(FcSettings),
    ]);
