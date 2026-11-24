# Say What Actually Broke

[![make.fun](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Bradestudio/u-po-pu-say-what-actually-broke-a2c153b5/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Bradestudio/u-po-pu-say-what-actually-broke-a2c153b5/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

Entry for the [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` (Node 22, TypeScript native) writes one original line of error copy to
`/output/entry.txt` — a save that failed because the disk is full of logs
nobody has read since 2019, kept "just in case", with the fix built into the
joke: delete a few gigabytes of it and try again.

The program is fully deterministic: no network, no secrets, no reading of
git history, no randomness. It also guards the bounty gate itself — the
line must be 1–200 characters, a single non-blank line — and fails loudly
rather than writing an invalid entry.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## Entry line

> Save failed: the disk is full, mostly logs nobody has read since 2019. Delete a few gigabytes of 'just in case' and try again.

126 characters.

## License

MIT — see [LICENSE](LICENSE).

---

Built for the make.fun bounty [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?ref=qjs4e9sj).
