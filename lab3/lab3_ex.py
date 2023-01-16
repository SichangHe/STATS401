from polars import DataFrame
from snscrape.modules.twitter import TwitterSearchScraper

raw = []
for i, t in enumerate(TwitterSearchScraper("#rust min_faves:10").get_items()):
    if i >= 1000:
        break
    raw.append(
        [
            t.date,
            t.url,
            t.rawContent,
            ", ".join(t.hashtags),
            t.lang,
            t.user.displayname,
            t.user.location,
            t.viewCount,
            t.likeCount,
            t.retweetCount,
        ]
    )

data = DataFrame(
    raw,
    columns=[
        "Date",
        "URL",
        "Content",
        "Hashtags",
        "Language",
        "User Name",
        "User Location",
        "View Count",
        "Like Count",
        "Retweet Count",
    ],
)

data.write_csv("STATS401_Sichang_He_Data.csv")
