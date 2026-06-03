"use client";

import type { ProductSpec } from "@/data/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SpecTable({ specs }: { specs: ProductSpec[] }) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-lg border border-border md:block">
        <table className="w-full text-sm">
          <tbody>
            {specs.map((spec, i) => (
              <tr
                key={spec.label}
                className={i % 2 === 0 ? "bg-muted/30" : "bg-transparent"}
              >
                <th className="w-1/3 px-4 py-3 text-left font-medium text-muted-foreground">
                  {spec.label}
                </th>
                <td className="px-4 py-3">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden">
        <Accordion>
          <AccordionItem value="specs">
            <AccordionTrigger>Full specifications</AccordionTrigger>
            <AccordionContent>
              <dl className="space-y-3">
                {specs.map((spec) => (
                  <div key={spec.label} className="border-b border-border pb-3 last:border-0">
                    <dt className="text-xs font-medium text-muted-foreground uppercase">
                      {spec.label}
                    </dt>
                    <dd className="mt-1 text-sm">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
