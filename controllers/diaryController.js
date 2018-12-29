import diaryList from '../models/diaryModel';

class DiaryController {
  static getAll() {}

  static createOne() {}

  static getOne() {}

  static updateOne() {}

  static deleteOne(req, res) {
    const id = parseInt(req.params.id, 10);
    const diaryEntry = diaryList.find(diaryItem => diaryItem.id === id);
    if (!diaryEntry) {
      res.status(404).json({
        message: 'Diary entry does not exist',
      });
    } else {
      diaryList.splice(diaryEntry.id, 1);
      res.status(200).json({
        message: 'Diary entry successfully deleted',
      });
    }
  }
}

export default DiaryController;
