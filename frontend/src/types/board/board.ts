// board型定義（受け取り用）
export interface Board {
  boardId: number;
  boardName: string;
  thumbnailUrl?: string;
  collaboratorNum: number;
  createdAt: Date;
  updatedAt: Date;
}