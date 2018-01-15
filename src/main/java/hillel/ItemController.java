package hillel;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ItemController {


    @MessageMapping("/getAllItems")
    @SendTo("/frontend/listItems")
    public String getAllItems(String message) {
        return new String("Hello, " + message + "!");
    }

}
