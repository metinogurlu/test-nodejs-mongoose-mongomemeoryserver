const Book = require('../models/book');

/**
     * Find records between given date and counts.
     * @param {Date} startDate
     * @param {Date} endDate
     * @return {Promise} Promise object represents the aggregated book
*/
const findPublishedBetween = async (startDate, endDate, minCount, maxCount) => {
  const aggregatedBooks = await Book.aggregate([
    {
      $project: {
        _id: 0,
        title: 1,
        pageCount: 1,
        publishedDate: 1,
        status: 1,
        authors: 1
      },
    },
    {
      $match: {
        publishedDate: { $gte: startDate, $lte: endDate },
        pageCount: { $gt: minCount, $lt: maxCount },
      },
    }
  ]);

  return aggregatedBooks;
};

module.exports.findPublishedBetween = findPublishedBetween;
