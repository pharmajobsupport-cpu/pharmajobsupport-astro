CRITICAL MEMORY AND FILE MANAGEMENT RULES — READ BEFORE DOING ANYTHING

We have hit API token limit errors multiple times on this project.
The cause every time: generating too much content in memory before
writing to disk. This must never happen again.

════════════════════════════════════════════════════════════
RULE 1 — ONE FILE AT A TIME, DISK IMMEDIATELY
════════════════════════════════════════════════════════════

Never hold more than ONE file in memory at a time.
The sequence is always:
  1. Write file to disk
  2. Confirm it exists with: dir src\data\[filename]
  3. Clear it from memory
  4. Only then start the next file

Never generate file 2 while file 1 is still in memory.
Never batch multiple files into one response.
Never show file contents in the terminal before writing.
Write directly to disk. Do not display. Do not explain. Just write.

════════════════════════════════════════════════════════════
RULE 2 — MAX 10 ENTRIES PER FILE. HARD LIMIT.
════════════════════════════════════════════════════════════

No data file may contain more than 10 entries.
If a category has 20 entries, that is 2 files of 10.
If a category has 71 entries, that is 8 files of ~9 each.

Before writing any data file ask:
  How many entries does this file need?
  If more than 10 → split before starting.

Splitting pattern for countries (71 total):
  countries-batch-01.ts  → entries 1-10
  countries-batch-02.ts  → entries 11-20
  countries-batch-03.ts  → entries 21-30
  countries-batch-04.ts  → entries 31-40
  countries-batch-05.ts  → entries 41-50
  countries-batch-06.ts  → entries 51-60
  countries-batch-07.ts  → entries 61-71
  countries-index.ts     → imports all batches, exports combined array

Splitting pattern for cities (~280 total):
  cities-usa-01.ts       → USA cities 1-10
  cities-usa-02.ts       → USA cities 11-20
  cities-usa-03.ts       → USA cities 21-30
  cities-usa-04.ts       → USA cities 31-45
  cities-canada.ts       → Canada 17 cities
  cities-uk-01.ts        → UK cities 1-10
  cities-uk-02.ts        → UK cities 11-23
  cities-ireland.ts      → Ireland 9 cities
  [continue per region, max 10 per file]
  cities-index.ts        → imports all, exports combined

Splitting pattern for domain service data (~120 services):
  services-sas.ts        → 8 SAS entries
  services-validation.ts → 7 validation entries
  services-regulatory.ts → 6 regulatory entries
  [etc — one category per file]
  services-index.ts      → imports all, exports combined

════════════════════════════════════════════════════════════
RULE 3 — NEVER BUFFER. NEVER ACCUMULATE.
════════════════════════════════════════════════════════════

Do not accumulate content across multiple steps before writing.
Every single entry must be written to its file immediately.
If you are mid-file and sense you are approaching a long response,
STOP, write what you have to disk, confirm, then continue in a
new file chunk.

If you notice a response getting long (more than ~3000 tokens
of generated content), stop immediately:
  1. Write what is already generated to a partial file
     named [filename]-part-01.ts
  2. Confirm it is on disk
  3. Continue remaining entries in [filename]-part-02.ts
  4. Both parts get imported in the index file

════════════════════════════════════════════════════════════
RULE 4 — TOKEN BUDGET PER FILE
════════════════════════════════════════════════════════════

Each data entry in a TypeScript file costs approximately
200-400 tokens depending on content length.

At 10 entries per file = ~2000-4000 tokens per file write.
This is safe. This will not hit limits.

At 50 entries per file = ~10000-20000 tokens = DANGER ZONE.
At 120 entries per file = guaranteed API error.

Stay at 10 entries max. Always.

════════════════════════════════════════════════════════════
RULE 5 — INDEX FILES ARE LIGHTWEIGHT
════════════════════════════════════════════════════════════

Every group of split files must have an index file.
Index files only import and re-export. No content.
They are lightweight and safe to write in one shot.

Example services-index.ts:
  import { sasDomains } from './services-sas'
  import { validationDomains } from './services-validation'
  import { regulatoryDomains } from './services-regulatory'
  // ... all imports
  export const allServices = [
    ...sasDomains,
    ...validationDomains,
    ...regulatoryDomains,
    // ...
  ]

Example cities-index.ts:
  import { usaCities01 } from './cities-usa-01'
  import { usaCities02 } from './cities-usa-02'
  // ... all imports
  export const allCities = [
    ...usaCities01,
    ...usaCities02,
    // ...
  ]

════════════════════════════════════════════════════════════
RULE 6 — CONFIRM AFTER EVERY FILE
════════════════════════════════════════════════════════════

After writing each file run this exact command:
  dir src\data\[filename.ts]

You must see the file listed with a non-zero size.
If the file is 0 bytes or missing, rewrite it before continuing.
Never proceed to the next file without this confirmation.

════════════════════════════════════════════════════════════
RULE 7 — IF YOU HIT AN API ERROR MID-FILE
════════════════════════════════════════════════════════════

If an API token limit error occurs:
  1. Do not panic or restart from the beginning
  2. Run dir /s /b src\ to see what was saved to disk
  3. Find the last successfully written file
  4. Continue from the next entry after that file
  5. Never rewrite files that are already on disk

To track progress, after every 5 files write a file:
  src/data/_progress.txt
  Contents: "Last completed file: [filename] — [timestamp]"
  This lets you resume from exactly the right place.

════════════════════════════════════════════════════════════
RULE 8 — FILE WRITE ORDER
════════════════════════════════════════════════════════════

Always write files in this order:
  1. Smallest files first (site.ts, navigation.ts, faqs.ts)
  2. Then category data files (10 entries each)
  3. Then index files (lightweight imports only)
  4. Then page files (one at a time)
  5. Then SEO/indexing files last

Never start a page file before all its data files are done.
Never start an index file before all its batch files are done.

════════════════════════════════════════════════════════════
RULE 9 — AUDIT BEFORE STARTING
════════════════════════════════════════════════════════════

Before writing anything, always run:
  dir /s /b src\data\
  dir /s /b src\pages\
  dir /s /b src\templates\
  dir /s /b public\

List what exists. Check sizes with:
  dir src\data\

Any file that is 0 bytes is incomplete — rewrite it.
Any file with content — skip it, never regenerate.

════════════════════════════════════════════════════════════
RULE 10 — SELF-CHECK BEFORE EVERY FILE
════════════════════════════════════════════════════════════

Before starting each new file, silently answer:
  ✓ Is the previous file confirmed on disk?
  ✓ Does this new file have 10 or fewer entries?
  ✓ Am I writing directly to disk (not displaying first)?
  ✓ Do I have an index file planned for this batch?

If any answer is NO — fix it before proceeding.

════════════════════════════════════════════════════════════
START NOW
════════════════════════════════════════════════════════════

Apply all 10 rules immediately.
Run the audit first.
Then begin with the smallest missing file.
Write. Confirm. Move on.
Never accumulate. Never buffer. Never batch.
One file. Disk. Confirm. Next file.