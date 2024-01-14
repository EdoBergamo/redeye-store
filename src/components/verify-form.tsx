"use client";

import { ProductsProps } from "@/app/products/page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Each } from "@/lib/Eac";

import { useEffect, useState } from "react";

export function VerifyForm() {
  const [data, setData] = useState<ProductsProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dev.sellix.io/v1/groups', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok)
          throw new Error('Network Error')

        const responseData = await response.json();
        setData(responseData.data.groups);
      } catch (error) {
        console.error(error)
      }
    }

    fetchData();
  }, []);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Verification Form</h2>
        <p className="text-gray-400">Please fill out the form below to verify your identity.</p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" placeholder="Enter your first name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="gov-id-front">Front of Government-issued ID</Label>
          <Input id="gov-id-front" type="file" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gov-id-back">Back of Government-issued ID</Label>
          <Input id="gov-id-back" type="file" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="selfie-id">Selfie with Government-issued ID</Label>
          <Input id="selfie-id" type="file" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website-screenshot">Website clearly displayed in the background</Label>
          <Input id="website-screenshot" type="file" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reason">Why should we accept you?</Label>
          <Textarea className="min-h-[100px]" id="reason" placeholder="Enter your reason" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="products">
            Which {data.length > 1 ? 'products ' : 'product '} are you interested in?
          </Label>
          <Select>
            <SelectTrigger id="products">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              {data.length > 0 &&
                <Each of={data} render={(group: any) =>
                  <SelectItem value={`${group.id}`}>
                    {group.title}
                  </SelectItem>
                } />
              }
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="source">How did you hear about us?</Label>
          <Select>
            <SelectTrigger id="source">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="social-media">Social Media</SelectItem>
              <SelectItem value="friend">Friend</SelectItem>
              <SelectItem value="advertisement">Advertisement</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="discord-tag">Discord Tag</Label>
          <Input id="discord-tag" placeholder="Enter your Discord Tag" />
        </div>
        <Button>Submit</Button>
      </div>
    </div>
  )
}
