---
title: Open Standards
description: Express processes, decisions, and cases in open standards like BPMN, DMN, and CMMN so your models outlive any single vendor's tool.
---

# Open Standards

> Open Standards **over** Proprietary Solutions

*Build your process automation on open, published specifications so your models outlive the tool that runs them today.*

This principle asserts that you should express processes, decisions, and cases in open, vendor-neutral specifications rather than a vendor's proprietary format. The standards that matter most are BPMN (Business Process Model and Notation), DMN (Decision Model and Notation), and CMMN (Case Management Model and Notation). The BPM Crafters hold this because automation assets are long-lived: they encode years of business knowledge, and that knowledge should not be hostage to one tool's licensing, roadmap, or lifecycle.

## Why it matters

Proprietary models trap knowledge. When a process lives in a closed format, it means something only inside one vendor's runtime. Migration — triggered by a pricing change, end of support, or a better engine — becomes a manual rewrite of every diagram, listener, and expression. Switching cost, not technical fit, ends up deciding your architecture for you. That is vendor lock-in.

Skills do not transfer either. A developer who knows BPMN can read a diagram from any compliant engine, whether Camunda, Operaton, or Flowable. A developer who only knows one vendor's canvas has to relearn each move. Open standards keep hiring, onboarding, and consulting portable across the whole ecosystem.

The subtle trap is the gap between supporting a standard and extending it. Most engines read and write valid BPMN, then add proprietary attributes, task types, or scripting for the parts that matter most in production. Lean on those extensions and your diagram still opens elsewhere but no longer runs there. Portability erodes one convenient shortcut at a time.

## In practice

- **Model in BPMN, DMN, and CMMN first.** Reach for the open element before a vendor-specific one, and treat proprietary constructs as the exception you justify.
- **Isolate vendor extensions.** Keep engine-specific attributes, connectors, and glue code in a thin, clearly marked layer so the core model stays portable.
- **Validate against the spec, not just the tool.** Round-trip your models through the standard's XML schema or a second modeler to catch constructs that only one engine understands.
- **Push logic out of proprietary scripts.** Implement business logic in versioned service code or DMN tables rather than inline vendor scripting that no other engine can execute.
- **Decouple workers from the engine.** Use job-worker or external-task patterns so your task implementations talk to the engine over a documented protocol instead of compiling against it.
- **Make portability a review criterion.** Ask during design reviews whether the model still runs on another compliant engine, and record every "no" as a deliberate trade-off.

## What this doesn't mean

Open standards are not a ban on vendor features. Proprietary extensions exist because engines compete on real value, including better tooling, performance, connectors, and support, and using them is often the pragmatic choice. The point is one of emphasis and sequencing: reach for the open standard first, adopt proprietary constructs deliberately, and know exactly what portability you trade for the convenience. A closed solution you choose with open eyes is fine; one you back into by default is the risk.

## Related principles

- [Process Automation Best Practices](/docs/principles/best-practices) — open beats proprietary for the same reason proven practices beat tool-centric habits; both keep portable logic out of vendor extensions.
- [Fostering Business-IT Alignment](/docs/principles/business-it-alignment) — open BPMN and DMN are what make your models readable and changeable by the business.
