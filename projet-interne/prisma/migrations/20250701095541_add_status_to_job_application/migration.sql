-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobApplication" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "cvPath" TEXT NOT NULL,
    "coverLetter" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'en_attente'
);
INSERT INTO "new_JobApplication" ("coverLetter", "createdAt", "cvPath", "email", "firstName", "id", "lastName", "phone", "position") SELECT "coverLetter", "createdAt", "cvPath", "email", "firstName", "id", "lastName", "phone", "position" FROM "JobApplication";
DROP TABLE "JobApplication";
ALTER TABLE "new_JobApplication" RENAME TO "JobApplication";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
