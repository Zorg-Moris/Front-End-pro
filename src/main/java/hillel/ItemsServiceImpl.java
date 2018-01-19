package hillel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("itemsServiceImpl")
public class ItemsServiceImpl implements ItemsService{

    @Autowired
    ItemsRepository itemsRepository;

    @Override
    public void save(Items item) {
        itemsRepository.save(item);
    }
}
