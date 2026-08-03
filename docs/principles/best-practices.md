---
title: Process Automation Best Practices
description: Why we value process automation best practices over tool-centric features, and how to model, test, version, and operate durable processes.
---

# Process Automation Best Practices

> Process Automation Best Practices **over** Tool-Centric Features

*Durable process solutions rest on proven engineering practices, not on the newest item on a vendor's feature list.*

This principle asserts that the way you model, build, test, and operate an automated process matters more than which tool-specific feature you reach for. We hold this because the value of an automated process lives in its clarity, correctness, and maintainability, and those qualities come from sound engineering rather than from any single feature. When a feature shapes your architecture, you trade long-term health for short-term convenience.

## Why it matters

When a tool feature dictates your design, the process becomes hard to reason about and expensive to change. Business rules end up scattered across script tasks, execution listeners, and proprietary expression languages, so no one can tell what the process actually does without opening the engine. Any change then means untangling logic you never isolated in the first place.

Teams that skip established practices hit the same failures again and again:

- **Untestable processes.** Logic buried in the model can only be checked by running the whole engine, so regressions slip through.
- **Manual deployments.** Models are clicked into production from a modeler, with no version history, review, or rollback.
- **Duplicate side effects.** A retried service task charges a customer twice because the call was never made [idempotent](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent) (safe to repeat without changing the result).
- **Blind operations.** When a claims-approval process stalls, no one can see where or why, because the process emits no metrics, logs, or traces.

## In practice

- **Agree on modeling conventions.** Standardize naming, element usage, and error patterns in [BPMN](https://www.omg.org/spec/BPMN/) (Business Process Model and Notation) and [DMN](https://www.omg.org/spec/DMN/) (Decision Model and Notation) so any team member can read a diagram.
- **Separate orchestration from business logic.** Keep the process model focused on flow and delegate real work to versioned services or workers, so logic stays testable outside the engine.
- **Put processes under version control and CI/CD.** Store models as files in [Git](https://git-scm.com/) and ship them through the same [continuous integration](https://martinfowler.com/articles/continuousIntegration.html) and continuous delivery (CI/CD) pipelines as your code, with automated builds, tests, and releases.
- **Design for failure.** Model boundary error events, retries, and compensation explicitly, and make every service call idempotent so retries are safe.
- **Automate process tests.** Use engine testing libraries, such as the process test support in Camunda, Operaton, or Flowable, to assert token flow, decision outcomes, and error paths on every commit.
- **Make processes observable.** Emit [metrics, structured logs, and traces](https://opentelemetry.io/) so you can answer where a claims-approval process is stuck and why.

## What this doesn't mean

This principle does not reject tool features. A capable engine, a good modeler, and prebuilt connectors and templates save real time, and you should use them. The point is one of emphasis and sequencing: let sound practices and patterns shape your architecture first, then adopt a specific feature when it serves that architecture, not the other way around.

## Related principles

- [Open Standards](/docs/principles/open-standards): avoiding lock-in and preferring versioned logic over vendor scripts keeps your models portable across engines.
- [Continuous Process Improvement](/docs/principles/continuous-improvement): observability, CI/CD, and small versioned releases are what make ongoing improvement safe.
