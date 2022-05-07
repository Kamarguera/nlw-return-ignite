import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe("Submit feedback", () => {
  it("should submit feedback", async () => {
    const submitFeedback = new SubmitFeedbackUseCase(
      {
        create: createFeedbackSpy,
      },

      {
        sendMail: sendMailSpy,
      }
    );

    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA    ",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  describe("Submit feedback", () => {
    it("should not be able to submit feedback", async () => {
      const submitFeedback = new SubmitFeedbackUseCase(
        {
          create: async () => {},
        },

        {
          sendMail: async () => {},
        }
      );

      await expect(
        submitFeedback.execute({
          type: "",
          comment: "example comment",
          screenshot:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA    ",
        })
      ).rejects.toThrow();
    });
  });

  describe("Submit feedback", () => {
    it("should not be able to submit feedback without comment", async () => {
      const submitFeedback = new SubmitFeedbackUseCase(
        {
          create: async () => {},
        },

        {
          sendMail: async () => {},
        }
      );

      await expect(
        submitFeedback.execute({
          type: "BUG",
          comment: "",
          screenshot:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA    ",
        })
      ).rejects.toThrow();
    });
  });

  describe("Submit feedback", () => {
    it("should not be able to submit feedback with invalid SCREENSHOT", async () => {
      const submitFeedback = new SubmitFeedbackUseCase(
        {
          create: async () => {},
        },

        {
          sendMail: async () => {},
        }
      );

      await expect(
        submitFeedback.execute({
          type: "BUG",
          comment: "ta tudo bugado",
          screenshot: "test.jpg",
        })
      ).rejects.toThrow();
    });
  });
});
