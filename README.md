# zds-mappings

Mapping file API for ZendrumStudio applications.

Raw (ZenEdit style) mapping files are stored in `/raw_files`. Whenever the content changes, run `gulp build` to (re)generate these.
The processed files are stored in `/src/mappings`.

## Requirements

- node `^8.0.0`
- yarn `^1.7.0` or npm equivalent

## Installation

```bash
$ yarn
```

## Concepts

This API's sole purpose is to provide the browser with access to stock, factory ZenEdit mappings, and also to facilitate creation and management of user created mappings.

Internally, user created mappings are stored in `localStorage` under the key `zds-user-mappings`.

Factory mappings are read-only and cannot be modified. To modify one, the user can create a copy with the `cloneMapping` method. All cloned mappings are stored as user mappings.

No two mappings may have the same name and `renameMapping` will fail silently if there is a naming conflict.

To get started, use the `getStockNames` and `getUserMappingNames` to obtain arrays of available mapping names. Then use `getMapping` to obtain the contents of a mapping by name.

From there you are free to use the rest of the API methods to modify the user mappings.

## API

**cloneMapping(mappingName: string)**
Pass the name of the mapping you wish to clone. The new mapping will have the same name but prefixed with "Copy of". In the event of name conflict, an integer counter is added to the end. For instance if "Copy of my map" exists and you try to clone "my map", the new map will be named "Copy of my map 1".

**createUserMapping(mappingName: string)**
Pass in the name of the new mapping. This method uses the same naming rules as `cloneMapping`.

**editUserMapping(name: string, noteNum: number, fieldName: string, value: string|number)**
This is used to modify a note entry in a user mapping. Pass the mapping name and the note number (1 to 128, not zero-indexed). The `fieldName` argument should be either "group" or "name", depending on which you wish to alter. The value will be either be the group name or the new MIDI note number value.

**emptyMapping()**
Returns an empty mapping. Useful for situations where a mapping is required, but none is available.

**getAvailableGroups()**
Returns an array of group types. Each entry will have a `value` and a `label` field. `value` is what is store in the `value` field for each note entry, and `label` is what should be shown to the user.

**getMapping(mappingName: string)**
Pass either a factory or user map name to obtain an array of 128 note entries. Each entry will have a `note`, `group` and `name` field.

**getNextAvailableMappingName(baseName: string)**
This checks to see if a mapping name is in use, and if so will return the base name with an appended index, starting from 1 and increasing until no conflicts are found. e.g. "My map 1", "My map 2", etc. If there are no conflicts at all, the original base name is returned.

**getStockNames()**
Returns an array of all the factory default mapping names.

**getUserMappingNames()**
Returns an array of all user created mappings.

**removeMapping(mappingName: string)**
Deletes a user mapping. This has no effect if called on a factory mapping, which are all considered read-only.

**renameUserMapping(oldName: string, newName: string)**
Attempts to rename an existing mapping. In the event of a naming conflict, no changes are made.

**storeMapping(mappingName: string, content: string)**
Primarily used to import map files created in ZenEdit. The content passed is the raw contents of such a file as one large string.

**validateContent(content: string)**
This should be called prior to importing content with `storeMapping`. A boolean is returned indicating the content is a valid ZenEdit mapping file.
