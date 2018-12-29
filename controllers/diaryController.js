import diaryList from '../models/diaryModel';

class DiaryController {
  static getAll() {}

  static createOne() {}

  static getOne(req, res) {
    const id = parseInt(req.params.id, 10);
    const diaryEntry = diaryList.find(diaryItem => diaryItem.id === id);
    if (diaryEntry) {
      res.status(200).json({
        message: 'Diary entry successfully retrieved',
        diaryEntry,
      });
    } else {
      res.status(404).json({
        message: 'Diary entry does not exist',
      });
    }
  }

  static updateOne() {}

  static deleteOne() {}
}

export default DiaryController;
