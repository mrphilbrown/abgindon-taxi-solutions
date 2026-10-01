# Abgindon Taxi Solutions

For this tutorial, **we are Abgindon Taxi Solutions**, an AI-first taxi
services company. Our customers want better driver, manager, and owner
experiences, and they want to know how we use AI to provide them.

This is a **Git evidence repository**, not a runnable taxi application.
Read [our service description](service/experience.md), then follow the
[AI TrustBOM tutorial](https://github.com/mrphilbrown/Spaverlock.AI.TrustBOM/blob/main/documentation/guides/tutorial.md)
to introduce a proposed Gemini dependency, model configuration, and
MCP connection one tracked change at a time. The scanner produces
draft, cited evidence, not proof of an operational deployment.

```powershell
git clone https://github.com/mrphilbrown/abgindon-taxi-solutions.git
cd abgindon-taxi-solutions
trustbom init
trustbom scan
```

You need Git and the `trustbom` CLI; **no Node.js, Python runtime, API
key, or server** is needed. The `workshop/` inputs are not in scope
until the tutorial copies them to recognized paths. All scenario data
and the customer's [sample RFI](rfi/request.csv) are synthetic; do not
put real employee records or confidential customer questions in this
public repository.

After our graph is genuinely approved and stamped in a real vendor
repository, `trustbom export` followed by
`trustbom answer --questions rfi\request.csv` can produce cited RFI
answers. On this unsigned exercise repository, `answer` **must refuse**
instead of responding from a draft. Unknown and unmatched answers
still require Trust review before anything goes to a customer.
