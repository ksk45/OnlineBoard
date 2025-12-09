package io.github.ksk45.onlineboard.Service.Menu;

import io.github.ksk45.onlineboard.Model.Response.MenuResponseDto;

public interface MenuService {
  
  /**
   * メニュー情報の取得
   *
   * @return メニュー情報
   */
  public MenuResponseDto getMenuData();
}
