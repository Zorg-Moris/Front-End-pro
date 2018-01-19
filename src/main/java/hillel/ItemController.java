package hillel;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ItemController {

    @Autowired
    ItemsService itemsService;


    @MessageMapping("/getAllItems")
    @SendTo("/frontend/listItems")
            public String getAllItems(String message) {
        System.out.println(message);
        Gson gson = new Gson();
        Items items = gson.fromJson(message, Items.class);
        System.out.println(items);
        itemsService.save(items);

        return new String("Hello, " + message + "!");
    }

}
