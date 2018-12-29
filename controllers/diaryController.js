import diaryList from '../models/diaryModel';

class DiaryController {
  static getAll() {}

  static createOne(req, res) {
    if (!req.body.title) {
      res.status(400).json({
        message: 'Title is required',
      });
    } else if (!req.body.description) {
      res.status(400).json({
        message: 'Description is required',
      });
    } else {
      const diaryEntry = {
        id: diaryList.length,
        title: req.body.title,
        description: req.body.description,
      };
      diaryList.push(diaryEntry);
      res.status(201).json({
        message: 'Diary Entry successfully created',
        diaryEntry,
      });
    }
  }

  static getOne() {}

  static updateOne() {}

  static deleteOne() {}
}

export default DiaryController;
