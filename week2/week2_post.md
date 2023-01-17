# Week 2 post

Read Munzner 2014 Chapter 3.
Write Short Answers to Below Questions (2-3 sentences per question),
and reply to at least one other person's post.

## Q1

Find **one static visualization**
(you can select one posted in Week 1 forum)
and **one interactive visualization** (you can provide the URL to it),
then analyze its user tasks.

### Static visualization

![Time to perform linking](https://raw.githubusercontent.com/rui314/mold/main/docs/comparison.png)

User task:
*Compare* the link time among `gold`, `lld`, and `mold`,
and *query* for the fastest linker.

### Interactive visualization

![Votes from Labour vs Conservative](https://raw.githubusercontent.com/SichangHe/STATS401/main/week2/vote_labour_vs_conservative.png)
From [The New York Times](https://www.nytimes.com/interactive/2017/06/08/world/europe/british-general-election-results-analysis.html).

User Task:
*Present* the Labour Party gaining votes in England and Wales
in the 2015 compared to 2017.

## Q2

Choose one of the two visualizations from Q1,
and analyze its four levels and three questions (what-why-how)
using the Nested Model for Data Vis introduced in W2S1.

Choosing the interactive visualization.

### Four nested levels of design

- Domain situation

    This is a news article that should present concisely and clearly
    the Labour Party gaining votes in the 2017 election compared to in 2015.
- Task and data abstraction
    - Why:
        Present the majority category in each geolocation each time.
    - What:
        Two maps of points where each point contains a list of vote counts.
- Visual encoding/interaction idiom (how)

    Show the regions as colored blocks on a map to indicate majority votes,
    use colored arrows with length proportional to the shift in votes.

    Show the distribution of votes of the specific region pointed to
    by the user's cursor.
- Algorithm

    Store the dataset in a JavaScript object.
    Use Svelte to subscribe to the change of the focused region
    and change the displayed region distribution.
