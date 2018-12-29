import diaryList from '../models/diaryModel';

class DiaryController {
  static getAll() {}

  static createOne() {}

  static getOne() {}

  static updateOne(req, res) {
    const id = parseInt(req.params.id, 10);
    const diaryEntry = diaryList.find(diaryItem => diaryItem.id === id);
    if (!diaryEntry) {
      res.status(404).json({
        message: 'Diary entry does not exist',
      });
    } else if (!req.body.title) {
      res.status(400).json({
        message: 'Title is required',
      });
    } else if (!req.body.description) {
      res.status(400).json({
        message: 'Description is required',
      });
    } else {
      const updatedDiaryEntry = {
        id: diaryEntry.id,
        title: req.body.title,
        description: req.body.description,
      };
      diaryList.splice(diaryEntry.id, 1, updatedDiaryEntry);
      res.status(200).json({
        message: 'Diary entry updated successfully',
        updatedDiaryEntry,
      });
    }
  }

  static deleteOne() {}
}

export default DiaryController;
