export interface SamplePreset {
  id: string;
  label: string;
  tag: string;
  content: string;
}

export const SAMPLE_PRESETS: SamplePreset[] = [
  {
    id: "balanced-day",
    label: "Balanced Productivity & Rest",
    tag: "Work + Health",
    content: `Woke up at 7:15 AM after 7.5 hours of decent sleep. Spent the morning knocking out my top 2 work deliverables before noon without checking Slack every 5 minutes.
Afternoon got slightly slower—had a 1-hour team sync that ran a bit over, then felt a bit of an energy slump around 3 PM so I browsed Reddit for 35 mins.
Caught myself, closed the tabs, and finished the report draft by 5:30.
Went for a 4km jog in the evening, made dinner with my partner, read 20 pages of my book, and turned off screens by 10:30 PM. Feeling pretty grounded.`,
  },
  {
    id: "distraction-struggle",
    label: "Study & Procrastination Battle",
    tag: "Study Focus",
    content: `Supposed to study 6 hours for organic chemistry finals today.
Actually sat down at 10 AM, but kept picking up my phone watching YouTube shorts for almost 2 hours. Felt super guilty afterwards.
Finally got into the flow state around 2 PM and managed 2.5 hours of solid practice problems.
Then ordered takeout, scrolled TikTok for another hour, and only did 30 minutes of flashcards before bed.
Really frustrated with my screen time today, but at least I got the toughest reaction mechanisms reviewed.`,
  },
  {
    id: "unexpected-crisis",
    label: "Family Emergency & Obstacles",
    tag: "High Adversity",
    content: `Had a whole planned checklist for today: gym, finish client proposal, clear inbox.
At 9:30 AM my mom called because she had sudden dizziness and needed someone to drive her to the urgent care clinic.
Spent 5 hours at the clinic waiting with her, getting prescriptions, and settling her back home safely.
Barely got to open my laptop until 7 PM. I managed to send a quick email to my client explaining a 1-day delay and ate a quick sandwich.
Didn't get any personal goals done, but mom is okay now. Exhausted mentally.`,
  },
  {
    id: "rest-recovery",
    label: "Dedicated Rest & Recharge",
    tag: "Recovery",
    content: `After a brutal 60-hour work week, took today strictly as a designated recharge day.
Slept in until 9:30 AM. Did gentle yoga stretching for 20 mins. Took my dog to the park for an hour in the fresh air.
Cooked a real healthy lunch instead of ordering delivery.
Spent the afternoon playing video games guilt-free and called an old college friend for 45 minutes to catch up.
Didn't do any work emails or side projects on purpose to prevent burnout. Ready to tackle Monday with full energy.`,
  },
];
