using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Controllers;
using WebApplication2.Repositories;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IRepositoryManager _repositoryManager;

        public ProductController(IRepositoryManager repositoryManager)
        {
            _repositoryManager = repositoryManager;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var products = await _repositoryManager.ProductRepository.GetAllProductsAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var product = await _repositoryManager.ProductRepository.GetProductByIdAsync(id);
            if (product == null)
            {
                return StatusCode(404);
            }
            return Ok(product);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ProductDtos reqest)
        {

            var product = new Product
            {
                Id = Guid.NewGuid(),
                Title = reqest.Title,
                Category = reqest.Category,
                Price = reqest.Price,
                Description = reqest.Description,
                ImageUrl = reqest.ImageUrl,
            };

            _repositoryManager.ProductRepository.PostProduct(product);
            await _repositoryManager.UnitOfWork.SaveChangesAsync();
            return StatusCode(201);
        }

        [HttpPut("id")]
        public async Task<IActionResult> Put([FromRoute]Guid id,[FromBody] ProductDtos request)
        {
            var product = await _repositoryManager.ProductRepository.GetProductByIdAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            product.Title = request.Title;
            product.Category = request.Category;
            product.Description = request.Description;
            product.Price = request.Price;
            product.ImageUrl = request.ImageUrl;

            _repositoryManager.ProductRepository.UpdateProduct(product);
            await _repositoryManager.UnitOfWork.SaveChangesAsync();
            return Ok(product);
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(Guid Id)
        {
            var product = await _repositoryManager.ProductRepository.GetProductByIdAsync(Id);
            if (product == null)
            {
                return NotFound();
            }
            _repositoryManager.ProductRepository.DeleteProduct(product);
            await _repositoryManager.UnitOfWork.SaveChangesAsync();
            return Ok();
        }
    }
}
