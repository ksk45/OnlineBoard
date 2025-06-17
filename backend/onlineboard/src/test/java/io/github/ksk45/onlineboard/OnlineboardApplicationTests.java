package io.github.ksk45.onlineboard;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
/** TODO: テスト用のプロファイルを設定をアノテーションではなく全体で設定するようにする
 * （現在は自動でapplication.propertiesが使用されてしまうため、アノテーションで直接指定） */
@ActiveProfiles("test")
class OnlineboardApplicationTests {

	@Test
	void contextLoads() {
	}

}
