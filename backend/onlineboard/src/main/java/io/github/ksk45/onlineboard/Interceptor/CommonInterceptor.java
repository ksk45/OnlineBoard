package io.github.ksk45.onlineboard.Interceptor;

import java.time.LocalDateTime;

import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import io.github.ksk45.onlineboard.Session.SessionUser;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class CommonInterceptor implements HandlerInterceptor {

  private final SessionUser sessionUser;

  /** Controller前処理 */
  @Override
  public boolean preHandle(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull Object handler) throws Exception {
    log.info("Process Start " +  commonLog(request));

    sessionUser.setAccessTime(LocalDateTime.now());
    return true;
  }
  
  /** Controller後処理 */
  @Override
  public void postHandle(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull Object handler, @Nullable ModelAndView modelAndView) throws Exception {
    log.info("Process End " +  commonLog(request));
  }

  /** ビューがレンダリングされた後 */
  @Override
  public void afterCompletion(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull Object handler, @Nullable Exception ex) throws Exception {
  }

  private String commonLog(HttpServletRequest request) {
    return "URI:" + request.getRequestURI() + " METHOD: " + request.getMethod();
  }
}
