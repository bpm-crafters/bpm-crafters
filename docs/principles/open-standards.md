---
title: Open Standards
description: Express processes and decisions in open standards like BPMN, DMN, and FEEL so your models and integration code outlive any single vendor's tool.
---

# Open Standards

> Open Standards **over** Proprietary Solutions

*Build your process automation on open, published specifications so your models outlive the tool that runs them today.*

This principle asserts that you should express processes and decisions in open, vendor-neutral specifications rather than a vendor's proprietary format. The standards that matter most are [BPMN](https://www.omg.org/spec/BPMN/) (Business Process Model and Notation), [DMN](https://www.omg.org/spec/DMN/) (Decision Model and Notation), and [FEEL](https://www.omg.org/spec/DMN/) (Friendly Enough Expression Language, the expression language defined inside DMN). We hold this because automation assets are long-lived: they encode years of business knowledge, and that knowledge should not be locked to one tool's licensing, roadmap, or lifecycle.

## Why it matters

Proprietary models trap knowledge. When a process lives in a closed format, it means something only inside one vendor's runtime. Migration to another engine, whether triggered by a pricing change, an end of support, or a better fit, then becomes a manual rewrite of every diagram, listener, and expression. Switching cost, not technical fit, ends up deciding your architecture for you. That is vendor lock-in.

Skills do not transfer either. A developer who knows BPMN can read a diagram from any compliant engine, whether Camunda, Operaton, or Flowable. A developer who only knows one vendor's canvas has to relearn each move. Open standards keep hiring, onboarding, and consulting portable across the whole ecosystem.

The subtle trap is the gap between supporting a standard and extending it. Most engines read and write valid BPMN, then add proprietary attributes, task types, or scripting for the parts that matter most in production. Lean on those extensions and your diagram still opens elsewhere but no longer runs there. Portability erodes one convenient shortcut at a time.

## Keep your integration engine-agnostic

Open standards cover the model. Your application code needs the same treatment, because a process application also binds to the engine through its client library, task workers, and APIs. Couple your code tightly to one vendor's client and you have simply moved the lock-in from the model into the codebase.

This is the gap the [Process Engine API](https://github.com/bpm-crafters/process-engine-api) closes. We build and maintain it as an engine-agnostic layer: one API with adapters for the common engines, including Camunda 7, Camunda 8, and CIB seven, so your integration code separates *how you talk to an engine* from *which engine you chose*. Migrating between engines then costs little or no change to your application, the same portability that open standards give your models, now applied to the integration itself.

## In practice

- **Model in BPMN and DMN first.** Reach for the open element before a vendor-specific one, and treat proprietary constructs as the exception you justify.
- **Isolate vendor extensions.** Keep engine-specific attributes, connectors, and glue code in a thin, clearly marked layer so the core model stays portable.
- **Validate against the spec, not just the tool.** Round-trip your models through the standard's XML schema or a second modeler to catch constructs that only one engine understands. The vendor-neutral [OMG BPMN Model Interchange Working Group (MIWG)](https://github.com/bpmn-miwg) publishes a shared test suite for exactly this, so you can see how faithfully each tool reads and writes the standard.
- **Push logic out of proprietary scripts.** Implement business logic in versioned service code or DMN tables rather than inline vendor scripting that no other engine can execute.
- **Decouple workers from the engine.** Talk to the engine over a documented protocol instead of compiling against it. Job-worker and external-task patterns, or an engine-agnostic layer like the [Process Engine API](https://github.com/bpm-crafters/process-engine-api), keep your task implementations independent of any single runtime.
- **Make portability a review criterion.** Ask during design reviews whether the model still runs on another compliant engine, and record every "no" as a deliberate trade-off.

## What this doesn't mean

Open standards are not a ban on vendor features. Proprietary extensions exist because engines compete on real value, including better tooling, performance, connectors, and support, and using them is often the pragmatic choice. The point is one of emphasis and sequencing: reach for the open standard first, adopt proprietary constructs deliberately, and know exactly what portability you trade for the convenience. A closed solution you choose with open eyes is fine. One you back into by default is the risk.

## Related principles

- [Process Automation Best Practices](/docs/principles/best-practices): open beats proprietary for the same reason proven practices beat tool-centric habits, and both keep portable logic out of vendor extensions.
- [Fostering Business-IT Alignment](/docs/principles/business-it-alignment): open BPMN and DMN are what make your models readable and changeable by the business.
