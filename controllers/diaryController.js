import diaryList from '../models/diaryModel';

class DiaryController {
  static getAll(req, res) {
    res.status(200).json({
      diaryList,
      message: 'Diary entries successfully retrieved',
    });
  }

  static createOne() {}

  static getOne() {}

  static updateOne() {}

  static deleteOne() {}
}

export default DiaryController;
