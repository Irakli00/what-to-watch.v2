"use client";

import { MediaQuestion } from "@/models/question";
import { createContext, useState } from "react";

const QuestionContext = createContext();

const animeQs = [
  new MediaQuestion("mediaType", "What type of media do you prefer?")
    .addOption("Anime", "anime", [
      new MediaQuestion("releaseDate", "Released when?")
        .addOption(
          "Before 2000",
          ["startDate_lesser", "20000000"],
          [
            new MediaQuestion("subtype", "Subtype prefferences?")
              .addOption("No", null)
              .addOption("Yeah", null, [
                new MediaQuestion("subtype", "What anime format do you prefer?")
                  .addOption("TV Series", "TV", [
                    new MediaQuestion("status", "Any Status?")
                      .addOption("Ongoing", "RELEASING")
                      .addOption("Finished", "FINISHED")
                      .addOption("Either", null),
                  ])
                  .addOption("Movies", "MOVIE")
                  .addOption("OVA (Original Video Animation)", "OVA")
                  .addOption("ONA (Original Net Animation)", "ONA")
                  .addOption("Specials", "SPECIAL")
                  .addOption("Music Videos", "MUSIC"),
              ]),
          ]
        )
        .addOption(
          "After 2000",
          ["startDate_greater", "20000000"],
          [
            new MediaQuestion("subtype", "Subtype prefferences?")
              .addOption("No", null)
              .addOption("Yeah", null, [
                new MediaQuestion("subtype", "What anime format do you prefer?")
                  .addOption("TV Series", "TV", [
                    new MediaQuestion("status", "Any Status?")
                      .addOption("Ongoing", "RELEASING")
                      .addOption("Finished", "finished")
                      .addOption("To Be Announced", "tba")
                      .addOption("Not Yet Released", "unreleased")
                      .addOption("Scheduled for Future", "upcoming")
                      .addOption("Surprise Me", null),
                  ])
                  .addOption("Movies", "MOVIE")
                  .addOption("OVA (Original Video Animation)", "OVA")
                  .addOption("ONA (Original Net Animation)", "ONA")
                  .addOption("Specials", "SPECIAL")
                  .addOption("Music Videos", "MUSIC"),
              ]),
          ]
        )
        .addOption("Doesn't matter", null),
    ])
    .addOption("Manga", "manga", [
      new MediaQuestion("releaseDate", "Released when?")
        .addOption(
          "Before 2000",
          ["startDate_lesser", "20000000"],
          [
            new MediaQuestion("subtype", "Subtype prefferences?")
              .addOption("No", null)
              .addOption("Yeah", null, [
                new MediaQuestion("subtype", "What Manga format do you prefer?")
                  .addOption("Traditional Manga", "MANGA", [
                    new MediaQuestion("status", "Any Status?")
                      .addOption("Ongoing", "RELEASING")
                      .addOption("Finished", "FINISHED")
                      .addOption("Either", null),
                  ])
                  .addOption("Light Novel", "NOVEL", [
                    new MediaQuestion("status", "Any Status?")
                      .addOption("Ongoing", "RELEASING")
                      .addOption("Finished", "FINISHED"),
                  ])
                  .addOption("One-shot", "ONE_SHOT"),
              ]),
          ]
        )
        .addOption(
          "After 2000",
          ["startDate_greater", "20000000"],
          [
            new MediaQuestion("subtype", "Subtype prefferences?")
              .addOption("No", null)
              .addOption("Yeah", null, [
                new MediaQuestion("subtype", "What Manga format do you prefer?")
                  .addOption("Traditional Manga", "MANGA", [
                    new MediaQuestion("status", "Any Status?")
                      .addOption("Ongoing", "RELEASING")
                      .addOption("Finished", "finished")
                      .addOption("To Be Announced", "tba")
                      .addOption("Not Yet Released", "unreleased")
                      .addOption("Scheduled for Future", "upcoming")
                      .addOption("Surprise Me", null),
                  ])
                  .addOption("Light Novel", "NOVEL", [
                    new MediaQuestion("status", "Any Status?")
                      .addOption("Ongoing", "RELEASING")
                      .addOption("Finished", "FINISHED")
                      .addOption("To Be Announced", "tba")
                      .addOption("Not Yet Released", "unreleased")
                      .addOption("Scheduled for Future", "upcoming")
                      .addOption("Surprise Me", null),
                  ])
                  .addOption("One-shot", "ONE_SHOT"),
              ]),
          ]
        )
        .addOption("Doesn't matter", null),
    ]),

  new MediaQuestion("genres", "Preferred genres?")
    .addOption("Action", "Action")
    .addOption("Comedy", "Comedy")
    .addOption("Drama", "Drama")
    .addOption("Doesn't matter", null),

  new MediaQuestion("rating", "Minimum rating?")
    .addOption("7+", 7)
    .addOption("5+", 5)
    .addOption("Doesn't matter", null),

  new MediaQuestion("sort", "Sort by?")
    // POPULARITY_DESC, SCORE_DESC
    .addOption("Populars first", "POPULARITY_DESC")
    .addOption("Lower rated first", "SCORE_DESC"),
];

export function QuestionProvier({ children }) {
  const [questionNum, setQuestionNum] = useState(0);

  return (
    <QuestionContext.Provider value={{ animeQs, questionNum, setQuestionNum }}>
      {children}
    </QuestionContext.Provider>
  );
}

export { QuestionContext };
