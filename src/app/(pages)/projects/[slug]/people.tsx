"use client"

import { useMemo } from "react"

import { InfoItem } from "@/components/primitives/info-item"
import { TextList } from "@/components/primitives/text-list"

import { QueryItemType } from "./query"

export function ProjectPeople({ entry }: { entry: QueryItemType }) {
  const peopleByDepartment = useMemo(() => {
    const departments = new Map<string, string[]>()

    entry.project?.people?.forEach((person) => {
      const dept = person.department?._title || "Other"

      if (!departments.has(dept)) {
        departments.set(dept, [])
      }

      departments.get(dept)?.push(person._title)
    })

    return Array.from(departments.entries()).sort(([a], [b]) =>
      a.localeCompare(b)
    )
  }, [entry.project?.people])

  if (peopleByDepartment.length === 0) {
    return null
  }

  return (
    <div className="grid-layout">
      <ul className="grid-row-start-2 col-span-5 mt-1.25 flex flex-col divide-y divide-brand-w1/20">
        <div />
        {peopleByDepartment.map(([department, people]) => (
          <InfoItem
            key={department}
            label={department}
            value={<TextList value={people} />}
            className="grid-cols-5"
          />
        ))}
        <div />
      </ul>
    </div>
  )
}
