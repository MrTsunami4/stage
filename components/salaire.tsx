"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Salaire() {
  const [year1, setYear1] = useState(0);
  const [year2, setYear2] = useState(0);
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [total, setTotal] = useState(0);
  const [mean, setMean] = useState(0);

  useEffect(() => {
    setTotal(amount1 + amount2);
  }, [amount1, amount2]);

  useEffect(() => {
    setMean(total / 2);
  }, [total]);

  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold">Income Calculator</h1>
      <div className="grid gap-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="year-1">Year</Label>
            <Input
              id="year-1"
              placeholder="Enter year"
              type="number"
              value={year1}
              onChange={(e) => setYear1(parseInt(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount-1">Amount per month</Label>
            <Input
              id="amount-1"
              placeholder="Enter amount"
              type="number"
              value={amount1}
              onChange={(e) => setAmount1(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="year-2">Year</Label>
            <Input
              id="year-2"
              placeholder="Enter year"
              type="number"
              value={year2}
              onChange={(e) => setYear2(parseInt(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount-2">Amount per month</Label>
            <Input
              id="amount-2"
              placeholder="Enter amount"
              type="number"
              value={amount2}
              onChange={(e) => setAmount2(parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
      <Button variant="outline">Add Line</Button>
      <div className="border-t pt-4 mt-4">
        <h2 className="text-xl font-semibold">Total</h2>
        <p className="text-lg">Average Annual Amount: {mean}</p>
      </div>
    </div>
  );
}
