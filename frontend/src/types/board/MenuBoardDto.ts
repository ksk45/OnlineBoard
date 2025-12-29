// board型定義（受け取り用）
export type MenuBoardDto = {
  boardUuid: string;
  boardName: string;
  boardOwnerId: number;
  thumbnailUrl?: string;
  memberCount: number;
  boardCreatedAt: string;
  updatedAt: string;
}