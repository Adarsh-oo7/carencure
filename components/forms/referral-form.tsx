'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const referralSchema = z.object({
  referrerName: z.string().min(2, 'Name must be at least 2 characters'),
  referrerEmail: z.string().email('Invalid email address'),
  referrerPhone: z.string().min(10, 'Please enter a valid phone number'),
  patientName: z.string().min(2, 'Patient name must be at least 2 characters'),
  patientEmail: z.string().email('Invalid email address'),
  patientPhone: z.string().min(10, 'Please enter a valid phone number'),
  relationship: z.string().min(1, 'Please specify your relationship'),
  message: z.string().optional(),
})

type ReferralFormValues = z.infer<typeof referralSchema>

export function ReferralForm() {
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<ReferralFormValues>({
    resolver: zodResolver(referralSchema),
    defaultValues: {
      referrerName: '',
      referrerEmail: '',
      referrerPhone: '',
      patientName: '',
      patientEmail: '',
      patientPhone: '',
      relationship: '',
      message: '',
    },
  })

  async function onSubmit(data: ReferralFormValues) {
    try {
      console.log('Referral data:', data)
      setSubmitted(true)
      form.reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {submitted && (
          <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
            Thank you for your referral! We&apos;ll reach out shortly.
          </div>
        )}

        <div className="border-t border-border pt-6">
          <h3 className="text-lg font-semibold text-secondary mb-4">Your Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="referrerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="referrerEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="referrerPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Phone *</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 (234) 567-890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="relationship"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Relationship *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Family, Friend, Colleague" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <h3 className="text-lg font-semibold text-secondary mb-4">Patient Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="patientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Patient name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="patientEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="patient@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="patientPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient Phone *</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 (234) 567-890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Information</FormLabel>
              <FormControl>
                <textarea
                  placeholder="Any additional information about the patient..."
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Submit Referral
        </Button>
      </form>
    </Form>
  )
}
