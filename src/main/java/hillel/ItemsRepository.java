package hillel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("itemsRepository")
public interface ItemsRepository extends JpaRepository <Items, Integer> {
}
