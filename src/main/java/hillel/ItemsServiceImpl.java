package hillel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("itemsServiceImpl")
public class ItemsServiceImpl implements ItemsService{

    @Autowired
    ItemsRepository itemsRepository;

    @Override
    public void save(Items item) {
        itemsRepository.save(item);
    }

    @Override
    public List<Items> getAllItems() {
        return itemsRepository.findAll();
    }
}
