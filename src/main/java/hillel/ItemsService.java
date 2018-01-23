package hillel;

import java.util.List;

public interface ItemsService {
    public void save(Items item);
    public List<Items> getAllItems();
}
