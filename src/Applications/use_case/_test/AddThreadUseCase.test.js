const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
const AddedThread = require('../../../Domains/threads/entities/AddedThread');
const AddThreadUseCase = require('../AddThreadUseCase');

describe('AddThreadUseCase', () => {
  it('should orchestrating the add thread action correctly', async () => {
    /**
     * @TODO 3
     * Lengkapi pengujian `AddThreadUseCase` agar dapat memastikan
     * flow/logika yang dituliskan pada `AddThreadUseCase` benar!
     *
     * Tentunya, di sini Anda harus melakukan Test Double
     * untuk memalsukan implmentasi fungsi `threadRepository`.
     */
    const useCasePayload = {
      title: 'Thread A',
      body: 'ini adalah body',
      owner: 'user-123',
    };

   const mockReturnAddedThread = new AddedThread({
      id: 'thread-123',
      title: 'Thread A',
      owner: 'user-123',
    });

    const mockThreadRepository = new ThreadRepository();

    mockThreadRepository.addThread = jest.fn(() => Promise.resolve(mockReturnAddedThread));

    const expectedAddedThread = new AddedThread({
      id: 'thread-123',
      title: 'Thread A',
      owner: 'user-123',
    });

    const useCase = new AddThreadUseCase({
      threadRepository : mockThreadRepository,
    });

    const addedThread = await useCase.execute(useCasePayload);

    expect(addedThread).toStrictEqual(expectedAddedThread);
    expect(mockThreadRepository.addThread).toBeCalledWith(new NewThread(useCasePayload),);
  });
});
