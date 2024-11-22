export const calculateCourseAverages = (menuItems: { course: string; price: number }[]) => {
    const courses = menuItems.reduce((acc, item) => {
      acc[item.course] = acc[item.course] || [];
      acc[item.course].push(item.price);
      return acc;
    }, {} as { [key: string]: number[] });
  
    return Object.entries(courses).map(([course, prices]) => ({
      course,
      averagePrice: (prices.reduce((sum, price) => sum + price, 0) / prices.length).toFixed(2),
    }));
  };
  