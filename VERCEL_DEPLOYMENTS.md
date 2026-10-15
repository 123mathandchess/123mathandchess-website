# Vercel deployment records: 123mathandchess/123mathandchess-website

Audited 2026-10-15T03:48:38.755Z (UTC). This document records 1 existing Vercel project from this repository. It is stored on `docs/vercel-deployment-records-2026-10-15` so documentation does not replace current production artifacts. The source branch can be ahead of, behind, or different from a CLI-uploaded live artifact.

## How to read this record

Each project has its own deployment history, stable ID, domains and settings below. Shared source does not imply interchangeable domains, environments or schedulers. This is a bounded retrospective snapshot, not a claim that all historical deployments have been audited.

- [client-123mathandchess-website](#client-123mathandchess-website)

## client-123mathandchess-website

The current production artifact was uploaded with the CLI and attributes its source to the staging branch, while the configured production branch is master. The recorded change restores site content and images from a local working tree. Do not replace it with a build of master without comparing the content and reviewing the intended release.

### Project and deployment settings

| Setting | Recorded value |
| --- | --- |
| Purpose | Math and chess education. |
| Vercel project | [client-123mathandchess-website](https://vercel.com/thejclabs/client-123mathandchess-website) |
| Stable project ID | `prj_30k9Brh2Qm1pkPPQosbJU0iZwJCk` |
| Owner team | thejclabs (existing Pro team) |
| Deployment login | access@thejclabs.com; verified GitHub author identity required |
| Source repository | [123mathandchess/123mathandchess-website](https://github.com/123mathandchess/123mathandchess-website) |
| Configured production branch | `master` |
| Project root | Repository root |
| Project framework override | `nextjs` |
| Project build command override | Not explicitly set |
| Project install command override | Not explicitly set |
| Project output directory override | Not explicitly set |
| Node version | `24.x` |
| Vercel Authentication scope | `all_except_custom_domains` |

No environment values, credentials or private report data are included here. A null project override does not mean no build happens: repository configuration and framework defaults may supply it.

### Configured domains

| Existing domain | Redirect destination | Branch restriction | Verified by Vercel |
| --- | --- | --- | --- |
| [123mathandchess.com](https://123mathandchess.com) | None | None | Yes |
| [123mathandchess-website.vercel.app](https://123mathandchess-website.vercel.app) | None | None | Yes |

Domain attachment is not proof of a working application. Preserve these names and redirect settings when maintaining the project.

### Current production target at audit time

- Deployment ID: `dpl_AZjL3Ep7SnfgoGQzTUGTo4zGTzuS`.
- State: **READY**.
- Created: 2026-09-17T20:30:41.672Z.
- Source: cli; attributed branch: `staging`.
- Artifact URL: [123mathandchess-website-mic5fawsw-thejclabs.vercel.app](https://123mathandchess-website-mic5fawsw-thejclabs.vercel.app).
- Source commit: [f69b558bf179c5a52f4867784e6d1ea7ff8f272a](https://github.com/123mathandchess/123mathandchess-website/commit/f69b558bf179c5a52f4867784e6d1ea7ff8f272a).
- Recorded commit message: feat: restore production site content from local working tree (images, page redesign).

| Deployment-time setting | Recorded value |
| --- | --- |
| Framework | nextjs |
| Build command | No explicit override recorded |
| Install command | No explicit override recorded |
| Output directory | No explicit override recorded |
| Node version | `24.x` |

CLI uploads can contain generated output or local changes that are not reproducible from the attributed Git commit alone. Confirm the exact uploaded tree before rebuilding or rolling back.

### Recent deployment history

The table contains up to ten most recent retained attempts, including previews and unsuccessful attempts. Titles are recorded Git metadata, not a fresh code audit. READY is a platform build state; functional testing, data accuracy and provider delivery were not revalidated by this documentation task.

| Created (UTC) | State / target | Deployment artifact | Source commit / branch | Recorded change |
| --- | --- | --- | --- | --- |
| 2026-10-08T20:42:02.704Z | READY / preview or unspecified | [dpl_3CubLWquX7wU7XbJMYo4z1Swxnkf](https://123mathandchess-website-hw2zohftv-thejclabs.vercel.app) | [e774ae1afc](https://github.com/123mathandchess/123mathandchess-website/commit/e774ae1afce5bfc45e7f7922f5d85a59c6ea216a); dependabot/npm_and_yarn/next-16.3.8 | chore(deps): bump next from 16.2.9 to 16.3.8 |
| 2026-09-17T20:31:01.849Z | READY / preview or unspecified | [dpl_5wwsLq5MW1kL9WW89jnUdgbGKcW9](https://123mathandchess-website-dsu7kljwb-thejclabs.vercel.app) | [fd11ef4a8d](https://github.com/123mathandchess/123mathandchess-website/commit/fd11ef4a8dec4042bb683a506c44c3e31b1094a9); staging | Update pricing: $65/session individual, $64/session family (weekly + summer, plus FAQ and site metadata) |
| 2026-09-17T20:30:41.672Z | READY / production | [dpl_AZjL3Ep7SnfgoGQzTUGTo4zGTzuS](https://123mathandchess-website-mic5fawsw-thejclabs.vercel.app) | [f69b558bf1](https://github.com/123mathandchess/123mathandchess-website/commit/f69b558bf179c5a52f4867784e6d1ea7ff8f272a); staging | feat: restore production site content from local working tree (images, page redesign) |
| 2026-09-13T22:43:28.038Z | READY / preview or unspecified | [dpl_DpHrX8sosKjjJtdb6QdNQMLusqxe](https://123mathandchess-website-49hr1mv2m-thejclabs.vercel.app) | [ac04a46e09](https://github.com/123mathandchess/123mathandchess-website/commit/ac04a46e094bd1e828907d3ef68bab8c05c8d254); dependabot/npm_and_yarn/js-yaml-4.3.2 | chore(deps-dev): bump js-yaml from 4.3.0 to 4.3.2 |
| 2026-09-11T03:40:36.496Z | READY / preview or unspecified | [dpl_5RuBShyDNvVfuABE3iKJiKucokJ7](https://123mathandchess-website-2yg1n7ypj-thejclabs.vercel.app) | [2f702cd7d1](https://github.com/123mathandchess/123mathandchess-website/commit/2f702cd7d1a34c708de2fb0708371990aa8017ee); dependabot/npm_and_yarn/multi-602d0ec552 | chore(deps): bump sharp and next |
| 2026-09-11T02:26:18.693Z | READY / preview or unspecified | [dpl_31VQn4ncnK2CAhPTFUU4yPj2223e](https://123mathandchess-website-fm95cwn6k-thejclabs.vercel.app) | [ec9a29457a](https://github.com/123mathandchess/123mathandchess-website/commit/ec9a29457ab79a81d2a5e3244caaea05c58deb13); dependabot/npm_and_yarn/baseline-browser-mapping-2.11.22 | chore(deps): bump baseline-browser-mapping from 2.10.40 to 2.11.22 |
| 2026-09-07T14:44:08.429Z | READY / preview or unspecified | [dpl_9rhmYyuwG5udsf4DpatiMgFtEYCk](https://123mathandchess-website-k7zhg0q8t-thejclabs.vercel.app) | [18e5b02910](https://github.com/123mathandchess/123mathandchess-website/commit/18e5b0291064df8b9fb970842d023c34331fc8e0); dependabot/npm_and_yarn/browserslist-4.28.9 | chore(deps-dev): bump browserslist from 4.28.4 to 4.28.9 |
| 2026-08-19T21:09:06.623Z | READY / production | [dpl_33UZwQhUusjMNPuwgQURkqRej8Tm](https://123mathandchess-website-210eucvgw-thejclabs.vercel.app) | [9e7f5928e0](https://github.com/123mathandchess/123mathandchess-website/commit/9e7f5928e0a3045517aea46d9c06f6baef941eac); master | merge: restore production content from staging (real site images + pages) |
| 2026-08-19T21:08:36.567Z | READY / preview or unspecified | [dpl_5knRycYgyVVtH9XonUtrhf9z24CF](https://123mathandchess-website-4nj2at5q4-thejclabs.vercel.app) | [f69b558bf1](https://github.com/123mathandchess/123mathandchess-website/commit/f69b558bf179c5a52f4867784e6d1ea7ff8f272a); staging | feat: restore production site content from local working tree (images, page redesign) |
| 2026-08-19T20:28:05.204Z | READY / production | [dpl_6s8eTPRDjd4Nh4hbHNQVfmViDsks](https://123mathandchess-website-m3bnnalzl-thejclabs.vercel.app) | [f555408c2c](https://github.com/123mathandchess/123mathandchess-website/commit/f555408c2cff4e7f7317a01e8d6f2a49c44303db); master | fix: add type=application/ld+json to schema script (fixes JS parse error) |

Older attempts exist outside this bounded snapshot. The production target above is authoritative for this snapshot even when the newest listed deployment is a preview.

### Native organization change

At 2026-10-15T03:32:00.238Z, the existing project was renamed from `123mathandchess-website` to `client-123mathandchess-website`. The stable project ID, existing team and domains were retained. Immediate read-back checks confirmed the expected name and unchanged team, configuration hash, domain configuration and production target. This administrative rename did not itself build or release application code.

The pre-organization production target was `dpl_AZjL3Ep7SnfgoGQzTUGTo4zGTzuS`. It still matches the production target in this documentation snapshot. The final organization audit preserved all configured domains on the 19 remaining projects. The separately hosted project directory was retired; native Vercel prefixes are the organizational system.

### Repository build and checks

These commands are declared in the repository at audit time. They may differ from the source of an older production artifact; this task did not execute them or change dependencies.

| Script | Command |
| --- | --- |
| `build` | `next build` |
| `lint` | `eslint` |

See the existing [repository README](https://github.com/123mathandchess/123mathandchess-website/blob/master/README.md) for application-specific context. Dated README claims are historical unless independently verified.

### Next deployment record

For every future release, append the UTC timestamp, intended project ID/environment, exact source SHA (or archived uploaded-tree identifier), deployment ID, concise change summary, tests actually run, live-domain checks, migrations/configuration changes by name only, remaining limitations, and the previous known-good artifact. Distinguish attempted, preview and live releases. Keep missing evidence explicit. Authenticate through access@thejclabs.com in the existing thejclabs team and verify the project by ID before any release.


## Production repair — October 15, 2026 (UTC)

Corrected the structured-data script type that caused the browser to execute JSON as JavaScript. The rebuilt source preserves the existing live $65 individual / $64 family tuition. The previous CLI artifact had newer prices than its recorded Git commit; all six routes were compared before replacement.

- Project: `prj_30k9Brh2Qm1pkPPQosbJU0iZwJCk`; existing `thejclabs` Pro team, login `access@thejclabs.com`.
- Production: `dpl_FKnEfsDiLF5NZgEiiRKfTQvtGtgk`; staged, checked and promoted. Uploaded source commit `2d4f427cd25b1602371b8bcba3333fd66257572b`, tree `5d9e57e01fe6db5a4b75ff51e390e9335071453c`, based on `f69b558bf179c5a52f4867784e6d1ea7ff8f272a`. The exact reproducible repair patch is published here as `VERCEL_REPAIR_2026-10-15.patch` at `1652d17cc07e694e05e6889613ef26de8d8f7cf3`. Apply it to the source base above; do not blindly rebuild the older default branch. Production remains the tested CLI artifact.
- Checks: TypeScript and production build; six-route text/link/image comparison; both schema blocks parse as JSON; 25 executable inline scripts compile; staged and live home browser have no console errors. Live tuition is retained. The contact form is hosted separately by Deftform; Joseph confirmed on October 15, 2026 that it is working. No additional delivery test is outstanding for this Vercel repair.
- Existing live domain `123mathandchess.com` serves the repair. No domain attachment/redirect or environment setting was edited. No migration.
- Previous artifact: `dpl_AZjL3Ep7SnfgoGQzTUGTo4zGTzuS`.

Documentation-branch builds are now skipped by the project Ignored Build Step. Other branches keep their previous behavior; skipping documentation is distinct from a successful application build.
