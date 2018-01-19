package hillel;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "items", catalog = "shop")
public class Items {
    private int id;
    private String category;
    private String sex;
    private int size;
    private String brand;
    private float price;
    private String foto;
    private String short_description;
    private String full_description;

    public Items() {
    }

    public Items(int id, String category, String sex, int size, String brand, float price, String foto, String short_description, String full_description) {
        this.id = id;
        this.category = category;
        this.sex = sex;
        this.size = size;
        this.brand = brand;
        this.price = price;
        this.foto = foto;
        this.short_description = short_description;
        this.full_description = full_description;
    }

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "category")
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Column(name = "sex")
    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    @Column(name = "size")
    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }


    @Column(name = "brand")
    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }


    @Column(name = "price")
    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    @Column(name = "foto")
    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    @Column(name = "short_description")
    public String getShort_description() {
        return short_description;
    }

    public void setShort_description(String short_description) {
        this.short_description = short_description;
    }

    @Column(name = "full_description")
    public String getFull_description() {
        return full_description;
    }

    public void setFull_description(String full_description) {
        this.full_description = full_description;
    }

    @Override
    public int hashCode() {
        return getId();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Items items = (Items) o;

        if (id != items.id) return false;
        if (size != items.size) return false;
        if (Float.compare(items.price, price) != 0) return false;
        if (!category.equals(items.category)) return false;
        if (!sex.equals(items.sex)) return false;
        if (!brand.equals(items.brand)) return false;
        if (!foto.equals(items.foto)) return false;
        if (!short_description.equals(items.short_description)) return false;
        return full_description.equals(items.full_description);
    }

    @Override
    public String toString() {
        return "Items{" +
                "id=" + id +
                ", category='" + category + '\'' +
                ", sex='" + sex + '\'' +
                ", size=" + size +
                ", brand='" + brand + '\'' +
                ", price=" + price +
                ", foto='" + foto + '\'' +
                ", short_description='" + short_description + '\'' +
                ", full_description='" + full_description + '\'' +
                '}';
    }
}
