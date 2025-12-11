// board型定義（受け取り用）
export type MenuBoardDto = {
  boardUuid: number;
  boardName: string;
  boardOwnerId: number;
  thumbnailUrl?: string;
  memberCount: number;
  boardCreatedAt: Date;
  updatedAt: Date;
}