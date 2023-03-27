package com.infosrtategic.aicyndicate;

import com.infosrtategic.aicyndicate.PostgreTestConfig;
import org.junit.jupiter.api.AfterEach;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;


@SpringBootTest
@Import(PostgreTestConfig.class)
@ContextConfiguration(classes = PostgreTestConfig.class)
public class BaseTest {
}
