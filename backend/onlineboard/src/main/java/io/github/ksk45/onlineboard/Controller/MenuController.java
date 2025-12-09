package io.github.ksk45.onlineboard.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import io.github.ksk45.onlineboard.Model.Response.MenuResponseDto;
import io.github.ksk45.onlineboard.Service.Menu.MenuService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("menu")
public class MenuController {

  private final MenuService menuService;

  @GetMapping("/")
  public ResponseEntity<MenuResponseDto> getMenuData() {

    MenuResponseDto responseDto = menuService.getMenuData();

    return new ResponseEntity<MenuResponseDto>(responseDto, HttpStatus.CREATED);
  }
}
