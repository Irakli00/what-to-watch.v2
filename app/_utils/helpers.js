export const detectFollowUps = function (question) {
  if (question?.followUps.length) {
    return question.followUps;
  }
};
