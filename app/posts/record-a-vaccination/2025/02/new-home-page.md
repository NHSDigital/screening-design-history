---
title: "Adding a Home page showing vaccination totals"
date: 2025-02-21
---

Previously in the alpha we explored the concept of adding a dashboard to let users see key information about their vaccination programme.

Since then we have learnt through research that one common user need is to be able to keep a log of how many vaccinations have been given each day. Some times this is done through a paper tally sheet. Alternatively users have used the 'Report' function to download a spreadsheet of all of the vaccinations in a given time period, and then used the number of rows to get a count.

We wanted to make this easier, and to give all users a sense of how many vaccinations they have delivered.

## What we did

We designed a new 'Home' page which all users see when signing in.

![Screenshot of new home page](new-home-page.png)

The home page contains:

* total vaccinations given today (so far)
* total vaccinations given in the past 7 days
* total vaccinations given in teh current calendar month
* a breakdown of the vaccinations given in the past 7 days by vaccine type

Our initial designs showed a rolling total of the past 28 days, but we changed this to the current calendar month after learning that some users report data in this way.

We also explored adding a total for the current vaccination ‘campaign’, for example Autumn/Winter 2024 to 2025, but we dropped this as not all vaccinations are seasonal, and there is no clear definition of dates for a given campaign.

Our design also included a break down by site, for users in trusts where there are multiple vaccination sites set up. This feature was de-scoped but could get added in future.

## Response

We did not do a full round of research on this design, as we felt we had enough information from previous research.

Since going live, we have had some positive feedback on the feature, and requests for further additions:

> Really liking the improved 'home' screen, it would be really useful it there was 8 days data on the front page, so I could compare Monday with Monday's figures from the previous week.

> Really liking the new summary report on the opening page. Would it be possible to offer another option of view by week for the month?
