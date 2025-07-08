module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // Tính năng mới
        "fix", // Sửa lỗi
        "docs", // Thay đổi tài liệu
        "style", // Thay đổi không ảnh hưởng đến code (formatting, missing semi colons, etc)
        "refactor", // Refactor code
        "perf", // Cải thiện performance
        "test", // Thêm hoặc sửa test
        "chore", // Thay đổi build process hoặc auxiliary tools
        "revert", // Revert commit
        "ci", // Thay đổi CI configuration files
        "build", // Thay đổi build system
      ],
    ],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "scope-empty": [0, "never"],
    "scope-case": [2, "always", "lower-case"],
    "subject-empty": [2, "never"],
    "subject-case": [2, "always", "lower-case"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 72],
  },
};
