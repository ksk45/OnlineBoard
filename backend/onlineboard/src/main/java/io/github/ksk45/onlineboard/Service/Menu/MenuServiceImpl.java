package io.github.ksk45.onlineboard.Service.Menu;

import org.springframework.stereotype.Service;

import io.github.ksk45.onlineboard.Model.Response.MenuResponseDto;
import io.github.ksk45.onlineboard.Repository.BoardRepository;
import io.github.ksk45.onlineboard.Session.SessionUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class MenuServiceImpl implements MenuService {
  
  private final SessionUser sessionUser;
  private final BoardRepository boardRepository;

  @Override
  public MenuResponseDto getMenuData() {
    MenuResponseDto responseDto = new MenuResponseDto();
    // 一覧表示用ボード情報取得
    responseDto.setBoardList(boardRepository.findBoardInfoList(sessionUser.getUserId()));
    return responseDto;
  };
}
